export class User {
    constructor(props = {}) {
        this.id = props.id
        this.name = props.name
        this.phone = props.phone
        this.avatar = props.avatar
        this.status = props.status
    }
}