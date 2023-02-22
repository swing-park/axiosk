import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getProducts } from "api";
import { Product } from "types";

const ProductsBoard = () => {
  const { data } = useQuery<Product[]>("getProducts", getProducts);

  const renderCardList = (products: Product[]) => {
    const ret = [];

    let list: React.ReactNode[] = [];
    for (let i = 0; i < products.length; i++) {
      if (i !== 0 && i % 6 === 5) {
        ret.push(<StCardList key={`list_${i}`}>{list}</StCardList>);
        list = [];
        continue;
      }

      list.push(
        <Link
          to={`/${products[i].id}`}
          key={products[i].id}
          state={products[i]}
        >
          <StCardBox>
            <StCardImg src={products[i].img_url} />
            <StCardTitle>
              {products[i].name.length > 11
                ? products[i].name.slice(0, 11) + "..."
                : products[i].name}
            </StCardTitle>
          </StCardBox>
        </Link>
      );
    }
    return [
      ret,
      <StCardList key={`list_${products.length}`}>{list}</StCardList>,
    ];
  };

  return <StContainer>{data ? renderCardList(data) : null}</StContainer>;
};

export default ProductsBoard;

const StContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 30px 0px;
  padding: 30px 10px;
  height: 100%;

  background-color: ${({ theme }) => theme.color.gray_1};
  border-radius: 30px;
`;

const StCardList = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  width: 100%;
  padding: 10px;

  background-color: #fff;
  border-radius: 10px;
`;

const StCardBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StCardImg = styled.img`
  width: 150px;
  height: 150px;
`;

const StCardTitle = styled.div`
  margin: 5px 0px;
`;
