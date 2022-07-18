import { createNamespace, getNamespace } from "cls-hooked"
import uuid from "uuid"

// import { APPLICATION_CONTEXT_NAMESPACE, TRANSACTION_ID_CONTEXT_KEY } from "../Constants"
const APPLICATION_CONTEXT_NAMESPACE = 'workfallmicro';
const TRANSACTION_ID_CONTEXT_KEY = 'transactionId';


export const getTransactionId = (): string => {
  return getNamespace(APPLICATION_CONTEXT_NAMESPACE) ? getNamespace(APPLICATION_CONTEXT_NAMESPACE).get(TRANSACTION_ID_CONTEXT_KEY) : ""
}

export const setTransactionIdMiddleware = (req: any, res: any, next: any): void => {
  const namespace = getNamespace(APPLICATION_CONTEXT_NAMESPACE)
  const transactionId = uuid.v4()

  namespace.bindEmitter(req)
  namespace.bindEmitter(res)

  namespace.run(() => {
    namespace.set(TRANSACTION_ID_CONTEXT_KEY, transactionId)
    next()
  })
}

export const createApplicationNamespace = (): void => {
  createNamespace(APPLICATION_CONTEXT_NAMESPACE)
}
