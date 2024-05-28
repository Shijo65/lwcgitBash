import { createElement } from 'lwc';
import ForEachLoopLWC from 'c/forEachLoopLWC';

describe('c-for-each-loop-lwc', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('should render the component', () => {
        // Arrange
        const element = createElement('c-for-each-loop-lwc', {
            is: ForEachLoopLWC
        });

        // Act
        document.body.appendChild(element);

        // Assert
        expect(document.body.querySelector('c-for-each-loop-lwc')).not.toBeNull();
    });
});
