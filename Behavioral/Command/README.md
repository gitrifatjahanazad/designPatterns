# A Typical Restaurant Order/Command Placement

### Problem
In a restaurant a lot of order comes from a customer. A waiter(Invoker) takes them. And on each order there are multiple order items(commands). But the cook(command receiver) on his own work load.  The waiter and the cook work independently. Waiter gets as many order he gets and cooks make items according to his capacity. 

### Steps
Every command is created with a receiver. In our case receiver is used for log keeping. An invoker controls the command receiving and execution. Invoker stacks up command and then at a convenient time it calls the execution. When a command is being executed it calls the receiver.