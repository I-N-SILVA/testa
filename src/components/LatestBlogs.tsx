import { Container, Section, Heading, Paragraph, Grid, Button, Box } from "@plyaz/ui";
import React from "react";
import { useTranslations } from "next-intl";
import { motion } from "motion/react";

const LatestBlogs = () => {
  const t = useTranslations("LatestBlogs");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const blogVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  // Mock blog data - replace with actual blog content
  const blogs = [
    {
      id: 1,
      title: "The Future of Sports Investment",
      excerpt: "Discover how blockchain technology is revolutionizing the way we invest in athletic talent.",
      date: "2024-12-15",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Fan Engagement in the Digital Age",
      excerpt: "Learn how modern platforms are connecting fans directly with their favorite athletes.",
      date: "2024-12-10",
      readTime: "4 min read"
    },
    {
      id: 3,
      title: "Tokenizing Athletic Talent",
      excerpt: "Understanding the mechanics of athlete tokenization and its benefits for all stakeholders.",
      date: "2024-12-05",
      readTime: "6 min read"
    }
  ];

  return (
    <Section className="pt-16 lg:pt-28" id="blogs">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div variants={titleVariants} className="text-center mb-12">
            <Heading
              element="h2"
              size="3xl"
              className="font-semibold text-foreground lg:text-5xl mb-4"
            >
              {t("title")}
            </Heading>
          </motion.div>

          <Grid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {blogs.map((blog) => (
              <motion.div
                key={blog.id}
                variants={blogVariants}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Box className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300 cursor-pointer group">
                  <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 h-48 relative">
                    <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <span className="text-sm opacity-90">{blog.date}</span>
                      <span className="ml-2 text-sm opacity-90">•</span>
                      <span className="ml-2 text-sm opacity-90">{blog.readTime}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <Heading
                      element="h3"
                      size="lg"
                      className="mb-3 text-gray-900 group-hover:text-emerald-600 transition-colors duration-300"
                    >
                      {blog.title}
                    </Heading>
                    <Paragraph
                      size="base"
                      className="text-gray-600 leading-relaxed"
                    >
                      {blog.excerpt}
                    </Paragraph>
                  </div>
                </Box>
              </motion.div>
            ))}
          </Grid>

          <motion.div 
            variants={buttonVariants}
            className="text-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Button
                variant="outline"
                className="px-8 py-3 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white transition-all duration-300 uppercase font-semibold"
              >
                {t("cta.loadMore")}
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
};

export default LatestBlogs;
