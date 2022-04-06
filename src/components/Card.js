function Card(props) {
  return (
    <div className="col-md-4">
      <img
        src={`https://codingapple1.github.io/shop/shoes${props.i + 1}.jpg`}
        alt="img"
        width="100%"
      />
      <h3>{props.shoes.title}</h3>
      <p>
        {props.shoes.content}&{props.shoes.price}
      </p>
    </div>
  );
}

export default Card;
