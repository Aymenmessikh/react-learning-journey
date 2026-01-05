import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Form, Button, Alert } from 'react-bootstrap';
import { STATUS_LABELS, TASK_STATUS } from '../../utils/constants';

const taskValidationSchema = Yup.object({
    title: Yup.string()
        .min(3, 'Le titre doit contenir au moins 3 caractères')
        .max(100, 'Le titre ne peut pas dépasser 100 caractères')
        .required('Le titre est requis'),
    description: Yup.string()
        .min(10, 'La description doit contenir au moins 10 caractères')
        .max(500, 'La description ne peut pas dépasser 500 caractères')
        .required('La description est requise'),
    status: Yup.string()
        .oneOf(Object.values(TASK_STATUS), 'Statut invalide')
        .required('Le statut est requis')
});

const TaskForm = ({ initialValues, onSubmit, onCancel, isEdit = false }) => {
    const defaultValues = {
        title: '',
        description: '',
        status: TASK_STATUS.TODO,
        ...initialValues
    };

    return (
        <Formik
            initialValues={defaultValues}
            validationSchema={taskValidationSchema}
            onSubmit={onSubmit}
            enableReinitialize
        >
            {({ errors, touched, isSubmitting }) => (
                <FormikForm>
                    <Form.Group className="mb-3">
                        <Form.Label>Titre *</Form.Label>
                        <Field
                            name="title"
                            type="text"
                            className={`form-control ${errors.title && touched.title ? 'is-invalid' : ''}`}
                            placeholder="Entrez le titre de la tâche"
                        />
                        <ErrorMessage name="title" component="div" className="invalid-feedback" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Description *</Form.Label>
                        <Field
                            name="description"
                            as="textarea"
                            rows={4}
                            className={`form-control ${errors.description && touched.description ? 'is-invalid' : ''}`}
                            placeholder="Décrivez la tâche en détail"
                        />
                        <ErrorMessage name="description" component="div" className="invalid-feedback" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Statut *</Form.Label>
                        <Field
                            name="status"
                            as="select"
                            className={`form-select ${errors.status && touched.status ? 'is-invalid' : ''}`}
                        >
                            {Object.entries(STATUS_LABELS).map(([key, label]) => (
                                <option key={key} value={key}>
                                    {label}
                                </option>
                            ))}
                        </Field>
                        <ErrorMessage name="status" component="div" className="invalid-feedback" />
                    </Form.Group>

                    <div className="d-flex gap-2">
                        <Button
                            type="submit"
                            variant="primary"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'En cours...' : (isEdit ? 'Modifier' : 'Créer')}
                        </Button>
                        <Button
                            type="button"
                            variant="secondary"
                            onClick={onCancel}
                            disabled={isSubmitting}
                        >
                            Annuler
                        </Button>
                    </div>
                </FormikForm>
            )}
        </Formik>
    );
};

export default TaskForm;