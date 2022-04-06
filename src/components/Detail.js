import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";

function Detail(props) {
  console.log(props.shoes);

  let { id } = useParams();
  console.log(id);
  //react 16 이상 사용 가능한 Hook
  //내가 이동했던 모든 페이지가 저장된 오브젝트(방문기록)
  let history = useHistory();

  return (
    <div className="container">
      <Box>fdghjfd</Box>
      <div className="row">
        <div className="col-md-6">
          <img
            alt="dtail-img"
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            width="100%"
          />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{props.shoes[id].title}</h4>
          <p>{props.shoes[id].content}</p>
          <p>{props.shoes[id].price}</p>
          <button className="btn btn-danger">주문하기</button>
          <button
            className="btn btn-danger"
            onClick={() => {
              history.goBack(); //라우터 뒤로가기 함수
              // history.push("/");
            }}
          >
            뒤로가기
          </button>
        </div>
      </div>
    </div>
  );
}

let Box = styled.div`
  margin: 20px;
  padding: 20px;
`;

let Title = styled.h1`
  color: red;
`;

export default Detail;
