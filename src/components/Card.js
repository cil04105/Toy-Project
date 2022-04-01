function Card(props) {
  return (
    <div className="col-md-4">
      <img
        src={`https://codingapple1.github.io/shop/shoes${props.i + 1}.jpg`}
        alt="img"
        width="100%"
      />
      <h3>{props.products.title}</h3>
      <p>
        {props.products.content}&{props.products.price}
      </p>
    </div>
  );
}

export default Card;
