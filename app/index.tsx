

import Button from "@/components/button";
import Container from "@/components/container";
import Content from "@/components/content";
import Form from "@/components/form";
import Input from "@/components/input";
import InputForm from "@/components/input-form";
import Label from "@/components/label";
import { useRouter } from "expo-router";

export default function Simulate() {
    const router = useRouter();

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
                    <Button
                        onPress={() => router.push("/stepOne")}
                        variant="primary"
                    >
                        Enviar
                    </Button>
                </InputForm>
            </Form>
        </Content>
    </Container>
}