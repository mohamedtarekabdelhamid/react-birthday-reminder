import React from 'react';

import List from './components/List';
import data from './data';

function App() {
    const [people, setPeople] = React.useState(data);
    const clearPeopleHandler = () => {
        setPeople([]);
    };
    return (
        <>
            <main>
                <section className="container">
                    <h3>{people.length} birthdays today</h3>
                    {people.map((person) => (
                        <List key={person.id} person={person} />
                    ))}
                    <button onClick={clearPeopleHandler}>Clear All</button>
                </section>
            </main>
        </>
    );
}

export default App;
