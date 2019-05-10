module.exports = class Results {

    constructor(size, callback) {
        this.size = size
        this.callback = callback
        this.items = []
    }

    add(order, data) {
        this.items.push({
            order: order,
            data: data
        })
        if (this.items.length === this.size) {
            this.callback(this.queue)
        }
    }

    get queue() {
        return this.items.sort((a, b) => {
            if (a.order < b.order) return -1
            if (a.order > b.order) return 1
            return 0
        }).map(item => item.data)
    }
}
