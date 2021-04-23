import { Link } from 'react-router-dom'
import { PageHeader } from 'antd';
function NavBar() {
    return (
        <div style={{backgroundColor:"#B7B8B6", color:"white",marginBottom:20}}>
            <Link to="/">
                <PageHeader
                    className="site-page-header"
                    title="ONESHOT.AI"
                    subTitle="More prospects. More sales."
                />
            </Link>

        </div>
    )
}

export default NavBar;