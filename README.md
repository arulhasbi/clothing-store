# Clothing Store

Yeay, another project(s) done. This time, I tried to mimick an online store but only consists of one page with a little functionalities which is to demonstrate: price switching based on the selected currency and add a product to the cart. That's it. It's based on codecademy project, but I again decided to built it from scratch, but the development is still within the scope.

I did the project for two days, and actually the final result is not that bad. This project objective is mainly to getting know about one of react's library, [Redux](https://redux.js.org/). Tbh, I am not sure whether I am already have a good understanding about it or not, but I think its like a way to manage your react states in a centralized manner and make states more accessible to the components. For an example: **without Redux**, given two components in a sibling level with one parent component, the only way to pass data between sibling components is through their parents, now **with Redux** you can pass data directly between sibling components. **Please, correct me if I'm wrong**.

Anyway, to spice things up a little bit, I challenged myself to style the page mainly with utility-classes provided by tailwindcss. My personal take is, tailwind did boost my development speed, but when I used too much utility-classes, its seems a little bit of chaos, like this one:

```
<FooterWrapper className="fixed top-[104px] right-0 w-[300px] self-start border-2 border-slate-900 shadow-xl shadow-sky-200 transition duration-150 ease-in-out">
      <p className="bg-white px-5 py-[16px] font-bold antialiased">Cart</p>
      <FooterMaxWidth className="ml-auto mr-auto flex max-w-4xl flex-col gap-4 bg-teal-100 px-5 py-5">
        {state.cart.length !== 0 &&
          state.cart.map((item) => (
            <Cart
              key={item.id}
              name={item.name}
              state={state}
              dispatch={dispatch}
            />
          ))}
      </FooterMaxWidth>
```

To sum up, I am really happy and I hope that I will learn more about react and tailwindcss in my next project. Any feedback are welcome. Peace!

### Project Screen Shots

![Screenshot](assets/ss.png)

### Dependencies

- [msw](https://mswjs.io/docs/): `^0.47.4`
- [@mswjs/data](https://github.com/mswjs/data): `^0.10.2`
- [@faker-js](https://fakerjs.dev/): `^7.6.0`
- [styled-components](https://styled-components.com/): `^5.3.6`
- [react-router-dom](https://v5.reactrouter.com/web/guides/quick-start): `^6.4.3`
- [Tailwind CSS](https://tailwindcss.com/): `^3.2.1`
- redux: `^4.2.0`
- redux-thunk: `^2.4.2`

### Available Scripts

In the project directory, you can run:

### `npm install`

To install all of the needed dependencies, then:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

You may also see any logs in the console when performing any form submission event.
