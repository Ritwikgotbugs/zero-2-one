import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { LogoutUser } from "@/utils/helper";
import { FiLogOut } from "react-icons/fi"
import { useRouter } from "next/navigation";


export function DialogLogoutButton() {
    const router = useRouter();
    const handleLogout = async () => {
            try {
                await LogoutUser();
            } 
            catch (error:any) {
                console.error("Logout failed:", error.message);
            } finally {
                router.push('/login');
            }
    }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default" className="bg-red-200 cursor-pointer"><FiLogOut className=""/></Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-white text-black border-0">
        <DialogHeader>
          <DialogTitle>Logout</DialogTitle>
          <DialogDescription>
            Are you sure you want to log out from your account? <br />
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-center">
          <DialogClose asChild>
            <Button type="button" variant="secondary" className="bg-red-500 text-white cursor-pointer" onClick={handleLogout}>
              Logout
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
