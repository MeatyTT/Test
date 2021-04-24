let $template = document.createElement('template');

$template.innerHTML = `
    <div class="user-container">
        <div class="user-avatar"></div>
        <div class="user-infor">
            <div class="user-name"></div>
            <div class="user-gender"></div>
            <div class="user-contact">
                <div class="user-country"></div>
                <div class="user-phone">5</div>
            </div>
            <div class="user-favorite">6</div>
        </div>
    </div>
`;
export default class UserContainer extends HTMLElement {
    constructor() {
        super();
        this.appendChild($template.content.cloneNode(true));
        this.$name = this.querySelector('.user-name');
        this.$gender = this.querySelector('.user-gender');
        this.$country = this.querySelector('.user-country');
        this.$phone = this.querySelector('.user-phone');
        this.$favorite = this.querySelector('.user-favorite');
        this.$avatar = this.querySelector('.user-avatar');
    }
    static get observedAttributes() {
        return ["name", "gender", "country", "phoneNumber", "favorites", "avatar"];
    }
    attributeChangedCallback(attrName, oldValue, newValue) {
        // console.log("Thuộc tính "+ attrName + ": " + newValue);
        if (attrName == "name") {
            this.$name.innerHTML = newValue;
        } else if (attrName == "gender") {
            this.$gender.innerHTML = newValue;
        } else if (attrName == "country") {
            this.$country.innerHTML = newValue;
        } else if (attrName == "avatar") {
            this.$avatar.style.backgroundImage = `url('${newValue}')`;
        } else if (attrName == "phoneNumber") {
            this.$phone.innerHTML = newValue;
        } else if (attrName = "favorites") {
            this.$favorite = newValue;
        }
    }
}

window.customElements.define('the-user', UserContainer);