import classNames from "classnames/bind" 
import Styles from './home.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faCalculator , faBarcode, faList} from '@fortawesome/free-solid-svg-icons';  
import { Link } from "react-router-dom";
import { Button } from 'antd';
const cx = classNames.bind(Styles)
const Home = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper__detail')}>
                <p>Sche to Teacher</p>
                <div className={cx('description')}>
                    <span className={cx('informartion__it')}>
                        <FontAwesomeIcon icon={faCode} />
                        <i>Sche là một ứng dụng website giúp tôi quản lý thời gian biểu dạy thêm của tôi.</i>
                    </span>

                    <span className={cx('informartion__it')}>
                        <FontAwesomeIcon icon={faList} />
                        <i>Tôi dùng Sche tạo thêm vào danh sách quản lý số lượng buổi dạy.</i>
                    </span>


                    <span className={cx('informartion__it')}>
                          <FontAwesomeIcon icon={faBarcode} />
                        <i>Thông tin về số buổi dạy và lớp học được bảo mật an toàn.</i>
                    </span>


                    <span className={cx('informartion__it')}>
                        <FontAwesomeIcon icon={faCalculator}/>
                        <i>Sche thống kế danh sách buổi dạy , ngày dạy và tiền lương cho tôi.</i>
                    </span>
                </div>  


                <Link to={'/login'}>
                     <Button type="primary" style={{backgroundColor: 'blue', marginTop: '20px'}}>Đăng nhập</Button>
                </Link>
            </div>
        </div>
    )
}



export default Home