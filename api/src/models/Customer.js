class Customer {
  constructor (id, documentValue, documentType, name, street, streetNumber, city, state, addressAdditionalInfo) {
    this.id = id
    this.document = documentValue
    this.documentType = documentType
    this.name = name
    this.street = street
    this.streetNumber = streetNumber
    this.city = city
    this.state = state
    this.addressAdditionalInfo = addressAdditionalInfo
  }
}

module.exports = Customer
