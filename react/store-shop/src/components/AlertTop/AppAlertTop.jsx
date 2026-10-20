import { Message } from '@primereact/ui/message'



function AppAlertTop () {
    return (
        <Message.Root variant="simple" className="bg-black! flex justify-center w-full rounded-none!">
              <Message.Content className="w-300">
                <Message.Text className="text-white! text-center! w-full">
                    Sign up and get 20% off to your first order. <a href="#" classeName="border-b-1">Sign Up Now</a>
                </Message.Text>
                <Message.Close className="text-white!">
                    X
                </Message.Close>
              </Message.Content>
            </Message.Root>
    )
}

export default AppAlertTop