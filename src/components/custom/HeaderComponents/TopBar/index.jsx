import { contactNav } from '@/assets/data/menuItems.json'
import ContactList from '@components/base/ContactList';
import Container from '@components/base/Container';
const TopBar = () => {
    return (
        <div className="bg-secondary hidden md:block">
            <Container>
                <div className="flex items-center justify-end gap-5 py-1 text-white text-sm">
                    {
                        contactNav?.map((nav, index) => <ContactList key={index} nav={nav} />)
                    }
                </div>
            </Container>
        </div>
    );
};

export default TopBar;