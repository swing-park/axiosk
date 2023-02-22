import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery } from "react-query";
import styled from "styled-components";
import { Button, IconButton, Rating, TextField } from "@mui/material";
import { Add, ArrowBack, Remove } from "@mui/icons-material";
import { Product } from "types";
import { getProduct, order, postReview } from "api";
import { getYYYYMMDD } from "utils";

const Detail = () => {
  const [cnt, setCnt] = useState(0);
  const [star, setStar] = useState<number | null>(0);
  const [comment, setComment] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  const { data } = useQuery<Product>("getProduct", () => getProduct(`${id}`));
  const { mutate: orderMutate } = useMutation(() => order(`${id}`, cnt));

  const handleClickPostReviewBtn = () => {
    if (data && id) {
      return postReview(id, [
        ...data.reviews,
        {
          id: Date.now(),
          username: "swing",
          date: getYYYYMMDD(),
          comment,
          star,
        },
      ]);
    }
  };

  return data ? (
    <StDetailWrapper>
      <StGoBackBtn onClick={() => navigate(-1)}>
        <ArrowBack />
      </StGoBackBtn>
      <StInfoWrapper>
        <StDDetailImg src={data.img_url} />
        <StInfoBox>
          <StName>{data.name}</StName>
          <StPrice>가격 : {data.price}원</StPrice>
          <div style={{ display: "flex" }}>
            <StInput
              type="number"
              value={cnt}
              onChange={(e) => setCnt(parseInt(e.target.value))}
            />
            <StCntBtn onClick={() => setCnt(cnt + 1)}>
              <Add />
            </StCntBtn>
            <StCntBtn onClick={() => setCnt(cnt - 1)}>
              <Remove />
            </StCntBtn>
          </div>
          <div style={{ display: "flex", gap: "30px" }}>
            <Button
              variant="outlined"
              color="warning"
              onClick={() => orderMutate()}
            >
              주문하기
            </Button>
            <Button variant="outlined" color="warning">
              장바구니추가
            </Button>
          </div>
        </StInfoBox>
      </StInfoWrapper>
      <StReviewContainer>
        <StReviewForm>
          <div style={{ width: "100%", marginRight: "10px " }}>
            <TextField
              variant="standard"
              color="warning"
              label="리뷰 남기기"
              fullWidth
              onChange={(e) => setComment(e.target.value)}
            />
            <Rating value={star} onChange={(e, v) => setStar(v)} />
          </div>
          <Button
            variant="outlined"
            color="warning"
            onClick={handleClickPostReviewBtn}
          >
            입력
          </Button>
        </StReviewForm>
        <StReviewsWrapper>
          {data.reviews.map((review) => (
            <StReviewBox key={review.id}>
              <div>{review.username}</div>
              <div>{review.date}</div>
              <Rating readOnly value={review.star} />
              <div>{review.comment}</div>
            </StReviewBox>
          ))}
        </StReviewsWrapper>
      </StReviewContainer>
    </StDetailWrapper>
  ) : null;
};

export default Detail;

const StDetailWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StInfoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StDDetailImg = styled.img`
  width: 200px;
  height: 200px;
`;

const StInfoBox = styled.div`
  width: 500px;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StName = styled.div`
  font-size: 2rem;
`;

const StPrice = styled.div``;

const StInput = styled.input`
  border: 3px solid #ffa94d;
  border-radius: 20px;
  text-align: center;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

const StCntBtn = styled(IconButton)``;

const StReviewContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  margin: 30px 0px;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.color.orange_1};
`;

const StReviewsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const StReviewBox = styled.div`
  width: 32%;
  height: 200px;
  background-color: #fff;
  padding: 10px;
  border-radius: 10px;
`;

const StReviewForm = styled.form`
  width: 100%;
  display: flex;
`;

const StGoBackBtn = styled(IconButton)`
  position: absolute;
  top: 0;
  left: 0;
`;
