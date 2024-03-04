function Article() {
    return (
        <Container>
            <Heading>Learn web development</Heading>
            <Paragraph>
                Welcome to the MDN learning area. This set of articles aims to guide complete beginners to web development with all that they need to start coding websites.
            </Paragraph>
            <Paragraph>
                The aim of this area of MDN is not to take you from "beginner" to "expert" but to take you from "beginner" to "comfortable." From there, you should be able to start making your way, learning from <Link>the rest of MDN</Link>, and other intermediate to advanced resources that assume a lot of previous knowledge.
            </Paragraph>
            <Paragraph>
                If you are a complete beginner, web development can be challenging — we will hold your hand and provide enough detail for you to feel comfortable and learn the topics properly. You should feel at home whether you are a student learning web development (on your own or as part of a class), a teacher looking for class materials, a hobbyist, or someone who just wants to understand more about how web technologies work.
            </Paragraph>
        </Container>
    )
}
const Container = styled.div`
font-family: "Inter", sans-serif;
box-sizing:border-box;
padding:0 25px;
max-width:700px;
margin:auto;
`
const Heading = styled.h1`
margin-top:2rem;
`
const Paragraph = styled.div`
margin:20px 0;
font-size:16px;
color:rgb(27,27,27);
`
const Link = styled.a`
color:#8cb4ff;
cursor:pointer;
text-decoration:underline;
`
const element = <Article />;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);


