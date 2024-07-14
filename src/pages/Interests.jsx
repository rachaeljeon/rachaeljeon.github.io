import React from 'react';
import { Container} from 'react-bootstrap';

export default function Interests() {
    console.log("YOU MADE INSIDE Interests")
    return (
        <div>
            <Container>
                <h1>What I'm fascinated about</h1>

                <p>We've all been there. Maybe some of us are still there.
                    This time has been a life changing moment for many of us.
                    At least it has been for me.
                    I don't think it takes a tremendous great deal of a world event
                    for someone to have an awakening.
                    But in strange ways, what this pandemic has taught me is something I greatly value to this day.
                    And with that, I'd like to share with you along my journey:
                    <h1></h1>
                    <ul>
                        <li>Self compassion is a necessity.</li>
                            <ul>
                                <li>Scientific research has shown we are physically wired to embody self compassion.</li>
                            </ul>
                            <ul>
                                <li>"You have to be kind to yourself when it seems least deserved."</li>
                            </ul>
                        <li><i>"Take things one step at a time."</i></li>
                            <ul>
                                <li>When overwhelming emotions take over, whether that's from endless tasks to achieve, or - big, scary things.
                                    Just taking things one step at a time because small actions compound over time.
                                </li>
                            </ul>
                        <li>Let things go - that's how you win your inner battle.</li>
                        <li>Embrace all the emotions - there are no good or bad emotions.</li>
                        <li>Be Patient For the Big Things; Be Impatient For The Small Things</li>
                        <li>"This too shall pass"</li>
                        <li>Power of Meditation</li>
                        <li>Breathe.</li>
                    </ul>
                </p>
            </Container>
        </div>
    )
}