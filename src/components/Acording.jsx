    import * as React from 'react';
    import Accordion from '@mui/material/Accordion';
    import AccordionSummary from '@mui/material/AccordionSummary';
    import AccordionDetails from '@mui/material/AccordionDetails';
    import Typography from '@mui/material/Typography';
    import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
    export default function AccordionUsage() {
    const id = React.useId();
    return (
        <div className='flex flex-col gap-3.5 rounded-[30px] answer'>
            <Accordion  sx={{backgroundColor:"#0f0f0f",color:"white" ,fontSize:"16px", padding:"7px 12px",borderTopLeftRadius:"inhert" ,display:"none" , }}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{color:"white"}}/>}
                aria-controls={`${id}-panel1-content`}
                id={`${id}-panel1-header`}
                >
                <Typography component="span"  sx={{fontSize:"26px"}}>What services do you porvide</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{color:"GrayText"}}>
                I am provide the web development as a serviecs
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{backgroundColor:"#0f0f0f",color:"white" ,fontSize:"16px", padding:"7px 12px",borderRadius:"30px" }}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{color:"white"}}/>}
                aria-controls={`${id}-panel1-content`}
                id={`${id}-panel1-header`}
                >
                <Typography component="span"  sx={{fontSize: { xs: "18px", md: "26px" }}}>What services do you porvide</Typography>
                </AccordionSummary>
                <AccordionDetails   sx={{fontSize: { xs: "14px", md: "18px" }, color:"GrayText"}}>
                I am provide the web development as a serviecs
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{backgroundColor:"#0f0f0f",color:"white" ,fontSize:"16px", padding:"7px 12px",borderRadius:"30px" }}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{color:"white"}}/>}
                aria-controls={`${id}-panel1-content`}
                id={`${id}-panel1-header`}
                >
                <Typography component="span" sx={{fontSize: { xs: "18px", md: "26px" }}}>How do I start working with you</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{fontSize: { xs: "14px", md: "18px" }, color:"GrayText"}}>
                It starts with a free discovery call. We’ll discuss your goals, vision, and how I can bring your ideas to life.
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{backgroundColor:"#0f0f0f",color:"white" ,fontSize:"16px", padding:"7px 12px",borderRadius:"30px" }}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{color:"white"}}/>}
                aria-controls={`${id}-panel1-content`}
                id={`${id}-panel1-header`}
                >
                <Typography component="span" sx={{fontSize: { xs: "18px", md: "26px" }}}>How long does a project take?</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{fontSize: { xs: "14px", md: "18px" }, color:"GrayText"}}>
                Project timelines vary based on scope, but most designs take 2–4 weeks. I’ll provide a clear timeline after our initial consultation.
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{backgroundColor:"#0f0f0f",color:"white" ,fontSize:"16px", padding:"7px 12px",borderRadius:"30px" }}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{color:"white"}}/>}
                aria-controls={`${id}-panel1-content`}
                id={`${id}-panel1-header`}
                >
                <Typography component="span" sx={{fontSize: { xs: "18px", md: "26px" }}}>Do you provide revisions?</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{fontSize: { xs: "14px", md: "18px" }, color:"GrayText"}}>
                Absolutely! I offer a set number of revisions to ensure the design perfectly aligns with your vision.
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{backgroundColor:"#0f0f0f",color:"white" ,fontSize:"16px", padding:"7px 12px",borderRadius:"30px" }}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{color:"white"}}/>}
                aria-controls={`${id}-panel1-content`}
                id={`${id}-panel1-header`}
                >
                <Typography component="span" sx={{fontSize: { xs: "18px", md: "26px" }}}>What industries do you work with?</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{fontSize: { xs: "14px", md: "18px" }, color:"GrayText"}}>
                From tech startups to creative agencies, I collaborate with a range of industries — adapting designs to fit each brand’s unique identity.
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{backgroundColor:"#0f0f0f",color:"white" ,fontSize:"16px", padding:"7px 12px",borderRadius:"30px" }}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{color:"white"}}/>}
                aria-controls={`${id}-panel1-content`}
                id={`${id}-panel1-header`}
                >
                <Typography component="span" sx={{fontSize: { xs: "18px", md: "26px" }}}>What is your pricing structure?</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{fontSize: { xs: "14px", md: "18px" }, color:"GrayText"}}>
                Pricing depends on the project’s complexity and scope. Let’s discuss your goals, and I’ll provide a transparent quote tailored to your needs.
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{backgroundColor:"#0f0f0f",color:"white" ,fontSize:"16px", padding:"7px 12px",borderRadius:"30px" }}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{color:"white"}}/>}
                aria-controls={`${id}-panel1-content`}
                id={`${id}-panel1-header`}
                >
                <Typography component="span" sx={{fontSize: { xs: "18px", md: "26px" }}}>Can you redesign my existing website?</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{fontSize: { xs: "14px", md: "18px" }, color:"GrayText"}}>
                Definitely! I can transform your outdated site into a modern, user-friendly experience that reflects your brand’s evolution.
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{backgroundColor:"#0f0f0f",color:"white" ,fontSize:"16px", padding:"7px 12px",borderRadius:"30px", display:"none"}}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{color:"white"}}/>}
                aria-controls={`${id}-panel1-content`}
                id={`${id}-panel1-header`}
                >
                <Typography component="span" sx={{fontSize:"26px"}}>What services do you porvide</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{color:"GrayText"}}>
                I am provide the web development as a serviecs
                </AccordionDetails>
            </Accordion>
        </div>
    );
    }
