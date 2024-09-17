

import Button from "@/components/button";
import Container from "@/components/container";
import Content from "@/components/content";
import Form from "@/components/form";
import Input from "@/components/input";
import InputForm from "@/components/input-form";
import Label from "@/components/label";
import { Text } from "react-native";

export default function Simulate() {

    return <Container>
        <Content>
            <Form>
                <InputForm>
                    <Label>E-mail</Label>
                    <Input 
                        placeholder="Enter your e-mail"
                    />
                </InputForm>

                <InputForm>
                    <Label>Password</Label>
                    <Input 
                        placeholder="Enter your password"
                    />
                </InputForm>

                <InputForm>
                    <Button>
                        Enviar
                    </Button>
                </InputForm>
            </Form>
        </Content>
    </Container>
}