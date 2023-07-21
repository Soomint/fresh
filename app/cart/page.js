export default function Cart() {
  let 장바구니 = ['Tomatoes', 'Pasta']

  return (
    <div>
      <h4 className="title">Cart</h4>
      <CartItem item={장바구니[0]}/>
      <CartItem item={장바구니[1]}/>
      <Banner content="롯데카드" />
      <Banner content="현대카드" />
    </div>
  )
}

function Banner({content}) {
  return <h5>{content} 결제 행사중</h5>;
}

function Button({color}) {
  return <button style={{backgroundColor: color}}>버튼</button>
}

function CartItem({item}) {
  return (
    <div className="cart-item">
      <p>{item}</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  )
}