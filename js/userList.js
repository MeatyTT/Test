import UserContainer from "./user.js";

const $template = document.createElement("template");
$template.innerHTML = `
    <div class="user-list">
    </div>
`;
export default class UserList extends HTMLElement {
    constructor() {
        super();
        this.appendChild($template.content.cloneNode(true));
        this.$list= this.querySelector('.user-list');
    }
    static get observedAttributes() {
        return ['user'];
    }
    attributeChangedCallback(attrName, oldValue, newValue) {
        if (attrName == 'user'){
            let data=JSON.parse(newValue);
            for(let userData of data){
                let $userContainer = new UserContainer();
                $userContainer.setAttribute("id", userData.id);
                $userContainer.setAttribute("name", userData.name);
                $userContainer.setAttribute("gender", userData.gender);
                $userContainer.setAttribute("avatar", userData.avatar);
                $userContainer.setAttribute("country", userData.country);
                $userContainer.setAttribute("phone", userData.phone);
                $userContainer.setAttribute("favorite", userData.favorite);
                this.$list.appendChild($userContainer);
            }
        }
    }
}
window.customElements.define("user-list", UserList);