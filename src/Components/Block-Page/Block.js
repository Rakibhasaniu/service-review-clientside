import React from 'react';
import useTitle from '../../hook/useTitle';

const Block = () => {
    useTitle('Block')
    return (
        <section className="dark:bg-gray-800 dark:text-gray-100">
            <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                <h2 className="text-2xl font-semibold sm:text-4xl">Frequently Asked Questions</h2>
                <p className="mt-4 mb-8 dark:text-gray-400">Sagittis tempor donec id vestibulum viverra. Neque condimentum primis orci at lacus amet bibendum.</p>
                <div className="space-y-4">
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-sky-400">1.Difference between SQL and NoSQL</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL. <br />
                            SQL databases defines and manipulates data based structured query language (SQL). Seeing from a side this language is extremely powerful. SQL is one of the most versatile and widely-used options available which makes it a safe choice especially for great complex queries. But from other side it can be restrictive. SQL requires you to use predefined schemas to determine the structure of your data before you work with it. Also all of your data must follow the same structure. This can require significant up-front preparation which means that a change in the structure would be both difficult and disruptive to your whole system.
                            A NoSQL database has dynamic schema for unstructured data. Data is stored in many ways which means it can be document-oriented, column-oriented, graph-based or organized as a KeyValue store. This flexibility means that documents can be created without having defined structure first. Also each document can have its own unique structure. The syntax varies from database to database, and you can add fields as you go.  </p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-sky-400">What is JWT, and how does it work??</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. <br />
                        Information Exchange: JWTs are a good way of securely transmitting information between parties because they can be signed, which means you can be sure that the senders are who they say they are. Additionally, the structure of a JWT allows you to verify that the content hasn't been tampered with. </p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-sky-400">What is the difference between javascript and NodeJS??</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. <br />
                        To summarize, Node. js is a cross-platform JavaScript runtime environment for servers and applications. It is built on a single-threaded, non-blocking event loop, the Google Chrome V8 JavaScript engine, and a low-level I/O API </p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-sky-400">How does NodeJS handle multiple requests at the same time?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. <br />
                        Node js uses an event loop to maintain concurrency and perform non-blocking I/O operations. As soon as Node js starts, it initializes an event loop. The event loop works on a queue (which is called an event queue) and performs tasks in FIFO(First In First Out) order. </p>
                    </details>
                </div>
            </div>
        </section>
    );
};

export default Block;