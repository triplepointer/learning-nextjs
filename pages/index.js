import React from "react";
import { Grid}  from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';

export default function Page({helloFromSSR}) {
  return <MyWonderfulComponentWithStyles id="id" options="options" count="count" color="color" data="data">I'm text from a component{helloFromSSR}</MyWonderfulComponentWithStyles>
}

// We can inject some CSS into the DOM.
const styles = {
  red: {
    color: 'red'
  },
};

function MyWonderfulComponent(props) {
  const { id, options, count, color, data, children, classes } = props;
  let summ = count;
  if (id && options?.params?.fields?.isDynamic) {
    summ += 1;
  }
  console.log(summ);

  return (
    <>
    <h1 className={classes.red}>Hello World!</h1>
    <Grid container>
      <Grid item xs={12}>{children}</Grid>
    </Grid>
    </>
  );
}

const MyWonderfulComponentWithStyles = withStyles(styles)(MyWonderfulComponent);

// This function gets called at the request time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getServerSideProps() {

  // By returning { props: helloFromSSR }, the Wonderful component
  // will receive `helloFromSSR` as a prop at request time

  let helloFromSSR = 'Hello from SSR';

  console.log(helloFromSSR);

  return {
    props: {
      helloFromSSR,
    },
  }
}