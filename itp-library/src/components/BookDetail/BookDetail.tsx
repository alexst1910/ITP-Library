import classes from "../BookDetail/BookDetail.module.css";

const BookDetail = (props: {
  title: string;
  author: string;
  price: string;
  cover: string;
}) => {
  return (
    <div className="row me-5 mx-5">
      <div className="col-sm-6 col-lg-6 col-md-6 col-xs-0 d-none d-lg-block">
        <div
          className={classes.image}
          style={{ backgroundImage: `url(${props.cover})` }}
        ></div>
      </div>
      <div className="col-sm-6 pe-5" style={{ height: "600px" }}>
        <div className="d-flex justify-content-between">
          <div>
            <h1 className={classes.lora}>{props.title}</h1>
            <p className="fs-5">
              by <b>{props.author}</b>
            </p>
          </div>
          <h1 className={classes.gold}>{props.price}</h1>
        </div>
        <div>
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio. Nam libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit quo minus id quod maxime placeat
            facere possimus, omnis voluptas assumenda est, omnis dolor
            repellendus. Temporibus autem quibusdam et aut officiis debitis aut
            rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint
            et molestiae non recusandae. Itaque earum rerum hic tenetur a
            sapiente delectus, ut aut reiciendis voluptatibus maiores alias
            consequatur aut perferendis doloribus asperiores repellat.
          </p>
        </div>
        <div>
          <button className="btn btn-dark w-50">
            <span className={classes.buttontext}>Add to cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default BookDetail;
