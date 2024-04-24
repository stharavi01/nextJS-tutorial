const DrinksLayout = ({ children }) => {
    return (
        <>
            <div className="mockup-code mb-8">
                <pre data-prefix="$">
                    <code>npx create-next-app@latest nextjs-tutorial</code>
                </pre>
            </div>
            {children}
        </>
    );
};
export default DrinksLayout;