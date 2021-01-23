This is a starter template for [Learn Next.js](https://nextjs.org/learn).

Тестовое задание

Используемый стэк: Next.js, Material-UI

№1 Провести рефактор кода страницы index.js

```

import React, useState, useEffect from "react";
import Grid from "@material-ui/core";

export default function Page(id, options, count, color, data) {
  return <MyWonderfulComponent id="id" options="options" count="count" color="color" data="data">I'm text from a component</MyWonderfulComponent>
}

function MyWonderfulComponent(id, options, children, other) {
  const { count } = other;
  const { summ, setSumm } = useState(count);

  useEffect(() => {
    if (id && options && options.params && options.params.fields && options.params.fields.isDynamic) {
      setSumm(summ + 1);
    }
  });

  console.log(summ);

  return (
    <h1>Hello World!</h1>
    <Grid>
      <Grid xs={12}>{children}</Grid>
    </Grid>
  );
}

```

№2 Добавить стиль для h1 (цвет текста красный) из предыдущего задания с помощью jss Material-ui

№3 Добавить вывод текста «Hello from SSR» в логи на стороне сервера и передать его в компонент MyWonderfulComponent
