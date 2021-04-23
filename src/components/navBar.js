
import { Link } from 'react-router-dom'
import { PageHeader } from 'antd';
function NavBar() {
    return (
        <div>
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