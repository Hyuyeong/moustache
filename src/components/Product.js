import { useState, useEffect, Fragment } from 'react';
import './Product.scss';

const Product = ({}) => {
  const [cart, setCart] = useState(false);

  const [addToCart, setAddToCart] = useState([]);

  const addToCartHandler = e => {
    if (!selectedSize) {
      alert('Please select the size');
    }

    setAddToCart([...addToCart, selectedSize]);
  };

  const [selectedSize, setSelectedSize] = useState('');

  const selectedSizeHandler = e => {
    setSelectedSize(e.target.value);

    console.log(e.target.value);
  };

  const cartHandler = e => {
    setCart(prev => !prev);

    if (addToCart.length === 0) {
      alert('Cart is empty.');
    }
  };

  // const [data, setData] = useState({});

  // const getData = async function () {
  //   try {
  //     const res = await fetch(
  //       'https://3sb655pz3a.execute-api.ap-southeast-2.amazonaws.com/live/product'
  //     );

  //     const json = await res.json();
  //     setData(json);

  //     console.log(data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  const data = {
    id: 1,
    title: 'Classic Tee',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    price: 75.0,
    imageURL:
      'https://mrdevelopertestassets.s3.ap-southeast-2.amazonaws.com/classic-tee.jpg',
    sizeOptions: [
      { id: 1, label: 'S' },
      { id: 2, label: 'M' },
      { id: 3, label: 'L' },
    ],
  };

  const size = data.sizeOptions.map(size => {
    return (
      <button onClick={selectedSizeHandler} key={size.id} value={size.label}>
        {size.label}
      </button>
    );
  });

  return (
    <Fragment>
      <header className="header">
        <button onClick={cartHandler} className="btn__cart">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
          </svg>
          <span>My Cart</span>({addToCart.length})
        </button>
        {cart && addToCart.length > 0 ? (
          <div className="cart">
            {addToCart.filter(size => size === 'S').length > 0 ? (
              <div className="cart__detail">
                <img className="cart__img" src={data.imageURL} alt="" />
                <div className="cart__description ">
                  <div className="cart__title"> {data.title}</div>

                  <div className="cart__quantity">
                    {addToCart.filter(size => size === 'S').length} x
                    <span> ${data.price.toFixed(2)}</span>
                  </div>
                  <div className="size">Size : S</div>
                </div>
              </div>
            ) : null}
            {addToCart.filter(size => size === 'M').length > 0 ? (
              <div className="cart__detail">
                <img className="cart__img" src={data.imageURL} alt="" />
                <div className="cart__description ">
                  <div className="cart__title"> {data.title}</div>

                  <div className="cart__quantity">
                    {addToCart.filter(size => size === 'M').length} x
                    <span> ${data.price.toFixed(2)}</span>
                  </div>
                  <div className="size">Size : M</div>
                </div>
              </div>
            ) : null}
            {addToCart.filter(size => size === 'L').length > 0 ? (
              <div className="cart__detail">
                <img className="cart__img" src={data.imageURL} alt="" />
                <div className="cart__description ">
                  <div className="cart__title"> {data.title}</div>

                  <div className="cart__quantity">
                    {addToCart.filter(size => size === 'L').length} x
                    <span> ${data.price.toFixed(2)}</span>
                  </div>
                  <div className="size">Size : L</div>
                </div>
              </div>
            ) : null}
          </div>
        ) : null}
      </header>
      <section className="container">
        <img className="product__img" src={data.imageURL} alt="" />

        <div className="product__detail">
          <div className="product__title">{data.title}</div>
          <div className="product__price">${data.price.toFixed(2)}</div>
          <p className="product__description">{data.description}</p>
          <div className="product__selection">
            size
            <span>*</span> <span className="slected_size">{selectedSize}</span>
          </div>

          <div className="product__size">{size}</div>
          <button onClick={addToCartHandler} className="product__button">
            Add to Cart
          </button>
        </div>
      </section>
    </Fragment>
  );
};
export default Product;
