
        // create an object outside the function scope that stores the values of the inputs
        // the object properties should carry the same name as the class names
        // the object would be saved in local storage
        // create a function (that is tied to the apply button)
        // that saves the properties in an object which is also saved in local storage
        // and implements the styles to the box.
        // the function will be chained to the apply button

        // get the style from local Storage (declared outside the function scopes)
        const stylePresetVariables= JSON.parse(localStorage.getItem('setStyle')) || {
            borderStyle: '',
            backgroundColor: '',
            borderRadius: '',
            border: '',
            marginTop: '',
            marginBottom: '',
            marginLeft: '',
            marginRight: '',
            height: '',
            width: '',
            borderStyle: ''
        }
        
        // create a function for the apply button 
        function applyPresetStyle() {
            // get the elements from thml
            const borderStyle = document.getElementById('border_style')
            const backgroundColor = document.getElementById('background_color')
            const borderColor = document.getElementById('border_color')
            const borderWidth = document.getElementById('border_width')
            const borderRadius = document.getElementById('border_radius')
            const topSpacing = document.getElementById('top_spacing')
            const bottomSpacing = document.getElementById('bottom_spacing')
            const leftSpacing = document.getElementById('left_spacing')
            const rightSpacing = document.getElementById('right_spacing')
            const height = document.getElementById('height_size')
            const width = document.getElementById('width_size')

            // check if the object 'stylePresetVariables' is created
            if (stylePresetVariables) {
                // get the practice box element
                const practiceBox = document.getElementById('playground_box');

                // get the values of the various elements and chain their values in the object properties
                stylePresetVariables.borderStyle = borderStyle.value
                stylePresetVariables.backgroundColor = backgroundColor.value
                stylePresetVariables.borderRadius = borderRadius.value + "px"
                stylePresetVariables.border = `${borderWidth.value}px ${borderStyle.value} ${borderColor.value}`
                stylePresetVariables.marginTop = topSpacing.value + "px"
                stylePresetVariables.marginBottom = bottomSpacing.value + "px"
                stylePresetVariables.marginLeft = leftSpacing.value + "px"
                stylePresetVariables.marginRight = rightSpacing.value + "px"
                stylePresetVariables.height = height.value + "px"
                stylePresetVariables.width = width.value + "px"
                stylePresetVariables.borderStyle = borderStyle.value

                // then set the values gotten to practice Box
                practiceBox.style.borderStyle = stylePresetVariables.borderStyle;
                practiceBox.style.backgroundColor = stylePresetVariables.backgroundColor;
                practiceBox.style.borderRadius = stylePresetVariables.borderRadius;
                practiceBox.style.border = stylePresetVariables.border;
                practiceBox.style.marginTop = stylePresetVariables.marginTop;
                practiceBox.style.marginBottom = stylePresetVariables.marginBottom;
                practiceBox.style.marginLeft = stylePresetVariables.marginLeft;
                practiceBox.style.marginRight = stylePresetVariables.marginRight;
                practiceBox.style.height = stylePresetVariables.height;
                practiceBox.style.width = stylePresetVariables.width;

                // output the object (for debugging)
                console.log(stylePresetVariables);

                // then send the object to local Storage
                localStorage.setItem('setStyle', JSON.stringify(stylePresetVariables))
            }
        }
        
        // I created another function for seperately loading the styles from local storage
        function loadPresetStyle() {
            // get the practice box from html
            const practiceBox = document.getElementById('playground_box');

            // check if the object 'stylePresetVariables' exists
            if (stylePresetVariables) {
                // add the styles to practice box
                practiceBox.style.borderStyle = stylePresetVariables.borderStyle;
                practiceBox.style.backgroundColor = stylePresetVariables.backgroundColor;
                practiceBox.style.borderRadius = stylePresetVariables.borderRadius;
                practiceBox.style.border = stylePresetVariables.border;
                practiceBox.style.marginTop = stylePresetVariables.marginTop;
                practiceBox.style.marginBottom = stylePresetVariables.marginBottom;
                practiceBox.style.marginLeft = stylePresetVariables.marginLeft;
                practiceBox.style.marginRight = stylePresetVariables.marginRight;
                practiceBox.style.height = stylePresetVariables.height;
                practiceBox.style.width = stylePresetVariables.width;
            }

           // modal()
        }

        // call the function on load (this help in refresh)
        window.onload = loadPresetStyle;

        
        
        // create a function (reset) that resets the properties of the object to empty in localStorage
        // the function will be chained to the reset button
        function resetStyles() {
            localStorage.removeItem('setStyle')
            const stylePresetVariables = {
                borderStyle: '',
                backgroundColor: '',
                borderRadius: '',
                border: '',
                marginTop: '',
                marginBottom: '',
                marginLeft: '',
                marginRight: '',
                height: '',
                width: '',
                borderStyle: ''
            }
            // get the practice box from html
            const practiceBox = document.getElementById('playground_box');

            // check if the object 'stylePresetVariables' exists
            if (stylePresetVariables) {
                // add the styles to practice box
                practiceBox.style.borderStyle = stylePresetVariables.borderStyle;
                practiceBox.style.backgroundColor = stylePresetVariables.backgroundColor;
                practiceBox.style.borderRadius = stylePresetVariables.borderRadius;
                practiceBox.style.border = stylePresetVariables.border;
                practiceBox.style.marginTop = stylePresetVariables.marginTop;
                practiceBox.style.marginBottom = stylePresetVariables.marginBottom;
                practiceBox.style.marginLeft = stylePresetVariables.marginLeft;
                practiceBox.style.marginRight = stylePresetVariables.marginRight;
                practiceBox.style.height = stylePresetVariables.height;
                practiceBox.style.width = stylePresetVariables.width;
            }
            console.log(stylePresetVariables);
        
        }
