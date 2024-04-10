"use client";
import img from "@/image/logo.png";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Login = () => {
  return (
    <div className="flex justify-center ">
      <Card className="w-[450px] h-[400px] container shadow-2xl  ">
        <CardHeader>
          <CardTitle className="text-center text-3xl">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <Label>Email</Label>
          <Input title="Enter your Email" />
          <Label>Password</Label>
          <Input title="Enter your Password" />
        </CardContent>
        <CardFooter className="flex items-center justify-center">
          <Button className=" text-white bg-gradient-to-br w-full mt-10 from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            Login
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
