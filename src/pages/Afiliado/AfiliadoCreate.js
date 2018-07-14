import React from 'react';
import styles from './../index.less';
import {
  Card,
  Form,
  Input,
  DatePicker,
  Select,
  InputNumber,
  Switch,
  Radio,
  Upload,
  Icon,
  Button,
} from 'antd';
import PageHeader from './../../components/organisms/PageHeader';

const FormItem = Form.Item;
const Option = Select.Option;
const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;

const fieldLabels = {
  nombre: 'Nombre',
  fechaAfiliacion: 'Fecha de Afiliación',
  pais: 'País',
  entidadfederativa: 'Entidad Federativa',
  tipospension: 'Tipos de Pensión',
  edad: 'Edad',
  supervivencia: 'Supervivencia',
  sexo: 'Sexo',
  semanas: 'Semanas Cotizadas Extranjero',
  actanacimiento: 'Acta de Nacimiento',
};

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 7 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 12 },
    md: { span: 10 },
  },
};

const submitFormLayout = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 10, offset: 7 },
  },
};

const fieldRequiredConfig = {
  rules: [{ required: true, message: 'Dato requerido' }],
};

const AfiliadoCreate = props => {
  const { getFieldDecorator } = props.form;

  return (
    <PageHeader
      title="Crear Afiliado"
      content="Forma para registrar el registro de un nuevo Afiliado."
    >
      <div style={{ margin: '24px 24px 0' }}>
        <Card bordered={false}>
          <Form hideRequiredMark style={{ marginTop: 8 }}>
            <FormItem {...formItemLayout} label={fieldLabels.nombre}>
              {getFieldDecorator('nombre', fieldRequiredConfig)(
                <Input placeholder="Nombre completo del Afiliado" />
              )}
            </FormItem>

            <FormItem {...formItemLayout} label={fieldLabels.fechaAfiliacion}>
              {getFieldDecorator('fechaAfiliacion', fieldRequiredConfig)(<DatePicker />)}
            </FormItem>

            <FormItem {...formItemLayout} label={fieldLabels.pais}>
              <span className="ant-form-text">México</span>
            </FormItem>

            <FormItem {...formItemLayout} label={fieldLabels.entidadfederativa} hasFeedback>
              {getFieldDecorator('entidadfederativa', fieldRequiredConfig)(
                <Select placeholder="Seleccionar Estado">
                  <Option value="cdmx">Ciudad de México</Option>
                  <Option value="ags">Aguascalientes</Option>
                  <Option value="nln">Nuevo León</Option>
                  <Option value="use">Jalisco</Option>
                </Select>
              )}
            </FormItem>

            <FormItem {...formItemLayout} label={fieldLabels.tipospension}>
              {getFieldDecorator('tipospension', fieldRequiredConfig)(
                <Select mode="multiple" placeholder="Seleccionar Pensiones">
                  <Option value="ipp">Incapacidad Permanente Parcial</Option>
                  <Option value="ipt">Incapacidad Permanente Total</Option>
                  <Option value="ra">Retiro anticipado</Option>
                </Select>
              )}
            </FormItem>

            <FormItem {...formItemLayout} label={fieldLabels.edad}>
              {getFieldDecorator('edad', { initialValue: 60 })(<InputNumber min={60} max={100} />)}
              <span className="ant-form-text"> años</span>
            </FormItem>

            <FormItem {...formItemLayout} label={fieldLabels.supervivencia}>
              {getFieldDecorator('supervivencia', { valuePropName: 'checked' })(<Switch />)}
            </FormItem>

            <FormItem {...formItemLayout} label={fieldLabels.semanas}>
              {getFieldDecorator('semanas')(
                <RadioGroup>
                  <Radio value="s">Si</Radio>
                  <Radio value="n">No</Radio>
                </RadioGroup>
              )}
            </FormItem>

            <FormItem {...formItemLayout} label={fieldLabels.sexo}>
              {getFieldDecorator('sexo')(
                <RadioGroup>
                  <RadioButton value="m">Masculino</RadioButton>
                  <RadioButton value="f">Femenino</RadioButton>
                </RadioGroup>
              )}
            </FormItem>

            <FormItem
              {...formItemLayout}
              label={fieldLabels.actanacimiento}
              extra="Acta de Nacimiento Certificada"
            >
              {getFieldDecorator('actanacimiento', {
                valuePropName: 'fileList',
                getValueFromEvent: this.normFile,
              })(
                <Upload name="logo" action="/upload.do" listType="picture">
                  <Button>
                    <Icon type="upload" /> Clic para anexar
                  </Button>
                </Upload>
              )}
            </FormItem>

            <FormItem wrapperCol={{ span: 12, offset: 5 }}>
              <Button type="primary" htmlType="submit">
                Enviar
              </Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    </PageHeader>
  );
};

export default Form.create()(AfiliadoCreate);
