import React from 'react';

const Template = (props) => {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <title>CDN test</title>
      </head>
      <body>
        {props.children}
      </body>
    </html>
  );
};

const Page = () => {
  return (
    <Template>
      <article>
        <img src="/assets/images/cdn_test.png" />
      </article>
    </Template>
  );
};

export default Page;
