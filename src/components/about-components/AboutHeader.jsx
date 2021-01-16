import React from "react";

export default function AboutHeader() {
    return (
        <div>
            <h1 className="mb-0">Dmitriy <span className="text-primary">Yegorov</span></h1>
            <div className="subheading mb-5"><h3 class="about-heading">Full Stack<a href="#"> Web Developer</a></h3></div>
            <p className="mb-5" style={{ maxWidth: 530 }}>I have a passion for coding, solving problems, and working on fun but challenging projects as part of a team or solo.
                        I enjoy creating web applications with JavaScript, Typescript, and React.js and do not shy away from new technologies, frameworks, and tools that could enhance or deepen my knowledge and skill set.</p>
        </div>
    );
}