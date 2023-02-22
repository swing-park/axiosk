# Axiosk

## Axios를 이용한 키오스크 서비스

👉 [Deploy](https://snazzy-mooncake-cb30c6.netlify.app/)
👉 [Figma](https://www.figma.com/file/nLRR5fF9PPAZv2vP53zMxJ/Untitled?node-id=0%3A1&t=I7L5Nr9Uyd2fCWNy-0)

### API

| 기능               | URL           | METHOD | Req                                                                                                            | Res                                                                                          |
| ------------------ | ------------- | ------ | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| 프로덕트 전체 조회 | /products     | GET    | --                                                                                                             | [{"id": 0,"img_url": "url","name": "이름","desciption": "설명","price": 0,"reviews": []},,,] |
| 프로덕트 단일 조회 | /products/:id | GET    | --                                                                                                             | {"id": 0,"username": "유저이름","comment": "코멘트","date": "2023-02-22","star": 0}          |
| 리뷰 남기기        | /products/:id | PATCH  | "id": "0", "reviews": [{"id": 0,"username": "유저이름","comment": "코멘트","date": "2023-02-22","star": 0},,,] | --                                                                                           |
| 주문하기           | /order        | POST   | {"productId": "0", "cnt": 0}                                                                                   | --                                                                                           |
