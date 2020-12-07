import BookItem from "./book-item";

const BooksHomeList = props => {
    return (
        <div className="flex three book-list">
            {
                [1,2,3,4,5].map( item => (<BookItem key={item} item={item} />) )
            }
        </div>
    )
}

export default BooksHomeList;
