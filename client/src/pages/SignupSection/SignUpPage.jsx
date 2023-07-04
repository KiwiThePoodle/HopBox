import React, { useState } from "react";
import * as postApi from "../../api/index";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { Container, Form, Label, Button, LinkText, LinkStyled, IconInput, CoverBg, VideoBg, Content, Image } from './SignupElements';
import Video from '../../assets/videos/video.mp4';

function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bio] = useState("");
  const [address] = useState("");
  const [school] = useState("");
  const [occupation] = useState("");
  const [phone] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const user = await postApi.createUser(name, email, password, bio, address, school, occupation, phone);
      if (user) {
        alert("Successfully created user.");
        setTimeout(() => {
          navigate("/signin");
        }, 100);
      }
    } catch (err) {
      console.log(err);
      console.log(err.message);
      if (err.message === "Request failed with status code 409") {
        alert("Email is already in use. Please try a different one.");
      } else {
        alert("Failed to create user");
      }
    }
  }

  return (
    <Container>
      <CoverBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </CoverBg>
      <Content>
        <Link to="/">
          <Image src="/src/assets/images/logo.png" alt="Logo" />
        </Link>
        <Form onSubmit={handleSubmit}>
          <Label>
            <IconInput type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder="Name" icon="name" />
          </Label>
          <Label>
            <IconInput type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Email" icon="email" />
          </Label>
          <Label>
            <IconInput type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Password" icon="password" />
          </Label>
          <Button type="submit">Sign Up</Button>
        </Form>
        <LinkText>Already have an account? <LinkStyled to="/signin">Sign in</LinkStyled>.</LinkText>
      </Content>
    </Container>
  );
}

export default SignUpPage;
