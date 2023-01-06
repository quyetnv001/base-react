import Header from './Header';
import SideBar from './Sidebar';

export const DefaultLayout = ({ children }) => {
    return (
        <div>
            <Header />
            <div className="container">
                <SideBar />
                <div className="content">{children}</div>
            </div>
        </div>
    );
};
