import './receiptOrder.css';
const Receiptorder = ({name,price,quantity}) => {
    return (
        <main className='receiptOrder'>
            <p className='receiptOrderName'>{name}</p>
            <p className='receiptOrderPrice'>{quantity} x ${price}</p>
        </main>
    )
}
export default Receiptorder;