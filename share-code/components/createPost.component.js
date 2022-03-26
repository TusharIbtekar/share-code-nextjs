import { Button, Link, List, ListItem, TextField, Typography } from '@mui/material'; import React, { useState } from 'react'
import Modal from 'react-modal';
import Form from './form.component';
import { useForm, Controller } from 'react-hook-form';
import { useSnackbar } from 'notistack';
import { getError } from '../utils/error';
import axios from 'axios';




const CreatePost = () => {
  const [actions, setActions] = useState({ isModal: false })

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const { enqueueSnackbar } = useSnackbar();

  const submitHandler = async ({ title, description, codeBlock }) => {
    try {
      const { data } = await axios.post('/api/createPost', {
        title,
        description,
        codeBlock,
      });
      console.log(data);
      // dispatch({ type: 'USER_LOGIN', payload: data });
      // jsCookie.set('userInfo', JSON.stringify(data));
      // router.push('/');
    } catch (err) {
      enqueueSnackbar(getError(err), { variant: 'error' });
    }
  };

  return (
    <>
      <button onClick={() => setActions({ isModal: true })}>add post</button>
      <Modal
        isOpen={actions.isModal}
        onRequestClose={() => setActions({ isModal: false })}
        style={{
          overlay: {
            position: 'fixed',
            zIndex: '4',
            backdropFilter: 'blur(8px)',
          },
          content: {
            top: '10%',
            left: '20%',
            right: '20%',
            bottom: '10%',
            // boxShadow: '3px 1px 29px -2px rgba(25,135,84,0.49)',
            boxShadow: '3px 1px 29px -2px rgba(234, 179, 8, 0.2)',
            border: '1px solid #ccc',
            overflow: 'auto',
            borderRadius: '15px',
            padding: '20px',
          },
        }}
      >

        <Form onSubmit={handleSubmit(submitHandler)}>
          <Typography component="h3" variant="h3">
            Add Your Code
          </Typography>
          <List>
            <ListItem>
              <Controller
                name="title"
                control={control}
                defaultValue=""
                rules={{
                  required: true,
                  minLength: 2,
                }}
                render={({ field }) => (
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="title"
                    label="Title"
                    inputProps={{ type: 'title' }}
                    error={Boolean(errors.name)}
                    helperText={
                      errors.name
                        ? errors.name.type === 'minLength'
                          ? 'Name length is more than 1'
                          : 'Name is required'
                        : ''
                    }
                    {...field}
                  ></TextField>
                )}
              ></Controller>
            </ListItem>

            <ListItem>
              <Controller
                name="description"
                control={control}
                defaultValue=""
                rules={{
                  required: true,
                }}
                render={({ field }) => (
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="description"
                    label="Description"
                    inputProps={{ type: 'description' }}
                    error={Boolean(errors.description)}
                    helperText={
                      errors.description
                        ? errors.description.type === 'pattern'
                          ? 'Description is not valid'
                          : 'Description is required'
                        : ''
                    }
                    {...field}
                  ></TextField>
                )}
              ></Controller>
            </ListItem>
            <ListItem>
              <Controller
                name="codeBlock"
                control={control}
                defaultValue=""
                rules={{
                  required: true,
                }}
                render={({ field }) => (
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="codeBlock"
                    label="Code"
                    inputProps={{ type: 'codeBlock' }}
                    error={Boolean(errors.codeBlock)}
                    {...field}
                  ></TextField>
                )}
              ></Controller>
            </ListItem>
            <ListItem>
              <Button variant="contained" type="submit" fullWidth color="primary">
                Submit
              </Button>
            </ListItem>

          </List>
        </Form>


      </Modal>
    </>
  )
}

export default CreatePost;