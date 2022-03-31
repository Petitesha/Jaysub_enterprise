import Investment from "../Investment/Investment";

const ourservices = () => {
    return (
        <section>{Investment.map((item) => (
            <Investment
            type={item.type}
            img={item.img}
            title={item.title}
            text={item.text}
            content={item.content}
            button={item.button}
            />
            ))}
        </section>
    )
}
export default ourservices;