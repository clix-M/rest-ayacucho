import { Footer } from "./_components/footer";
import { Navbar } from "./_components/navbar";

const Layout = (
    { children }: { children: React.ReactNode }
) => {
    return ( 
        <div className=" mx-auto">
            <Navbar />
            {children}
            <Footer />
        </div>
     );
}
 
export default Layout;
<div>
    
</div>