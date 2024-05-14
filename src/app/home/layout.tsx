const Layout = (
    { children }: { children: React.ReactNode }
) => {
    return ( 
        <div className="container mx-auto">
            <div className="h-[7vh] py-4">
                <h1 className="relative scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl flex justify-center ">
                    Los Mejores Restaurantes de la Ciudad de Ayacucho
                </h1>
            </div>
            {children}
        </div>
     );
}
 
export default Layout;