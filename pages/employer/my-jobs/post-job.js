import { useState, useEffect } from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Checkbox,
  CheckboxGroup,
  Button,
  Select,
  Text,
  Wrap,
  WrapItem,
  Container,
  Flex,
} from '@chakra-ui/react';
import {
  GetCategories,
  GetSalaries,
  GetSkills,
  PostJob,
} from '@/services/employer/myJobs';
import toast, { Toaster } from 'react-hot-toast';
import { colors } from '@/Components/assets/style';
import { useRouter } from 'next/router';

const PostJobPage = () => {
  const [formData, setFormData] = useState({
    company_id: 1,
    job_position: '',
    job_description: '',
    job_requirement: '',
    job_type: [],
    job_experience_requirement: [],
    job_work_place: 'onsite',
    job_category_id: '',
    job_salary_id: '',
  });
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [skills, setSkills] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [jobCategories, setJobCategories] = useState([]);
  const [jobSalaries, setJobSalaries] = useState([]);

  useEffect(() => {
    // Fetch job categories
    fetchJobCategories();
    // Fetch job salaries
    fetchJobSalaries();
    // Fetch skills
    fetchSkills();
  }, []);

  const fetchJobCategories = async () => {
    try {
      const data = await GetCategories();
      setJobCategories(data.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchJobSalaries = async () => {
    try {
      const data = await GetSalaries();
      setJobSalaries(data.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchSkills = async () => {
    try {
      const data = await GetSkills();
      setSkills(data.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSelectChange = (event) => {
    const selectedValues = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );

    setSelectedSkills([...selectedSkills, selectedValues]);
  };
  const handleCheckboxChange = (values, name) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: values,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    toast.loading('Posting Job ...', {
      duration: 2000,
      position: 'top-right',
    });
    // Kirim data posting pekerjaan ke server
    // Pecah skills dahulu
    const skill_id = selectedSkills.map((selectedSkill) =>
      parseInt(selectedSkill[0])
    );
    formData.skill_id = skill_id;
    const postJob = await PostJob(formData);
    if (postJob) {
      setTimeout(() => {
        setLoading(false);
        toast.success('Job posted', {
          duration: 5000,
          position: 'top-right',
        });
      }, 2000);
      // Reset formulir
      setFormData({
        job_position: '',
        job_description: '',
        job_requirement: '',
        job_type: [],
        job_experience_requirement: [],
        job_work_place: 'onsite',
        job_category_id: '',
        job_salary_id: '',
      });
      setSelectedSkills([]);
    } else {
      toast.error('Job not posted', {
        duration: 5000,
        position: 'top-right',
      });
      setLoading(false);
    }
  };

  return (
    <Container maxWidth={'4xl'} py={50} margin='0 auto'>
      <Box>
        <Text
          fontWeight={'bold'}
          fontSize={'30'}
          noOfLines={1}
          marginBottom={4}
          color={colors.headline}
        >
          Post Job
        </Text>
        <form onSubmit={handleSubmit}>
          <FormControl id='jobPosition'>
            <FormLabel>Job Position:</FormLabel>
            <Input
              type='text'
              name='job_position'
              value={formData.job_position}
              onChange={handleInputChange}
              required
            />
          </FormControl>
          <br />
          <FormControl id='jobDescription'>
            <FormLabel>Job Description:</FormLabel>
            <Textarea
              name='job_description'
              value={formData.job_description}
              onChange={handleInputChange}
              required
            />
          </FormControl>
          <br />
          <FormControl id='jobRequirement'>
            <FormLabel>Job Requirement:</FormLabel>
            <Textarea
              name='job_requirement'
              value={formData.job_requirement}
              onChange={handleInputChange}
              required
            />
          </FormControl>
          <br />
          <FormControl id='jobType'>
            <FormLabel>Job Type:</FormLabel>
            <CheckboxGroup
              colorScheme='blue'
              value={formData.job_type}
              onChange={(values) => handleCheckboxChange(values, 'job_type')}
            >
              <Checkbox name='fulltime' value='fulltime'>
                Full-time
              </Checkbox>
              <Checkbox name='parttime' value='parttime'>
                Part-time
              </Checkbox>
              <Checkbox name='intern' value='intern'>
                Intern
              </Checkbox>
            </CheckboxGroup>
          </FormControl>
          <br />
          <FormControl id='jobExperienceRequirement'>
            <FormLabel>Job Experience Requirement:</FormLabel>
            <CheckboxGroup
              colorScheme='blue'
              value={formData.job_experience_requirement}
              onChange={(values) =>
                handleCheckboxChange(values, 'job_experience_requirement')
              }
            >
              <Checkbox name='fresh_graduate' value='fresh_graduate'>
                Fresh Graduate
              </Checkbox>
              <Checkbox name='junior' value='junior'>
                Junior
              </Checkbox>
              <Checkbox name='middle' value='middle'>
                Middle
              </Checkbox>
              <Checkbox name='senior' value='senior'>
                Senior
              </Checkbox>
            </CheckboxGroup>
          </FormControl>
          <br />
          <FormControl id='jobCategory'>
            <FormLabel>Job Category:</FormLabel>
            <Select
              name='job_category_id'
              value={formData.job_category_id}
              onChange={handleInputChange}
              required
            >
              <option key={0} value={0}>
                -- Select category --
              </option>
              {jobCategories.map((category) => (
                <option key={category.category_id} value={category.category_id}>
                  {category.category_name}
                </option>
              ))}
            </Select>
          </FormControl>
          <br />
          <FormControl id='jobSalary'>
            <FormLabel>Job Salary:</FormLabel>
            <Select
              name='job_salary_id'
              value={formData.job_salary_id}
              onChange={handleInputChange}
              required
            >
              <option key={0} value={0}>
                -- Select salary --
              </option>
              {jobSalaries.map((salary) => (
                <option key={salary.salary_id} value={salary.salary_id}>
                  {salary.min_salary} - {salary.max_salary}
                </option>
              ))}
            </Select>
          </FormControl>
          <br />
          <FormControl id='jobWorkPlace'>
            <FormLabel>Job Work Place:</FormLabel>
            <Select
              name='job_work_place'
              value={formData.job_work_place}
              onChange={handleInputChange}
            >
              <option value='onsite'>Onsite</option>
              <option value='remote'>Remote</option>
              <option value='hybird'>Hybrid</option>
            </Select>
          </FormControl>
          <br />
          <FormControl id='jobWorkPlace'>
            <FormLabel>Skills Needed :</FormLabel>
            <Select
              size='md'
              placeholder='Select skills (multiple choise)'
              onChange={handleSelectChange}
            >
              {skills.map((skill) => (
                <option key={skill.skill_id} value={skill.skill_id}>
                  {skill.skill_name}
                </option>
              ))}
            </Select>
          </FormControl>
          <Wrap spacing={2} marginTop={2}>
            {selectedSkills.length > 0
              ? selectedSkills.map((option) => {
                  const selectedSkill = skills.find(
                    (skill) => skill.skill_id == option
                  );
                  if (selectedSkill) {
                    return (
                      <WrapItem key={option}>
                        <Box
                          background={'teal.400'}
                          py={1}
                          px={2}
                          borderRadius={15}
                          fontSize={'15'}
                          color={'#ffffff'}
                        >
                          {selectedSkill.skill_name}
                        </Box>
                      </WrapItem>
                    );
                  } else {
                    return null;
                  }
                })
              : ''}
          </Wrap>
          <br />
          <Flex gap={3}>
            <Button colorScheme='blue' type='submit' isLoading={loading}>
              Post Job
            </Button>
            <Button
              colorScheme='gray'
              type='button'
              onClick={() => router.back()}
            >
              Back
            </Button>
          </Flex>
        </form>
        <Toaster />
      </Box>
    </Container>
  );
};

export default PostJobPage;
