export class User {
    constructor(props = {}) {
        this.userId = props.userId
        this.name = props.name
        this.phone = props.phone
        this.avatar = props.avatar
        this.status = props.status
    }
}