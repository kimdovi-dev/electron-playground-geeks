import { BsFillPeopleFill } from 'react-icons/bs'
import './style.scss'

const Header = () => {
  return (
    <header className="float-clear">
      <div className="navi-title float-left ">
        <BsFillPeopleFill
          fill="#72767d"
          style={{ fontSize: '2rem' }}
        ></BsFillPeopleFill>
        <h3 style={{ paddingLeft: '1.2rem' }}>친구</h3>
        <span className="divider"></span>
      </div>
      <ul>
        <li>모두</li>
        <li>온라인</li>
        <li>대기중</li>
        <li>차단목록</li>
        <li>친구추가</li>
      </ul>
      <div>
        <button type="button">뭐하지</button>
        <button type="button">뭐할까</button>
      </div>
    </header>
  )
}

export default Header
