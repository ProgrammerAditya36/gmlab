import { useState } from "react";
import PageLayout from "../components/PageLayout";
import allPublications from "../constants/allPublications.json";
import Container from "../components/Container";

const Publications = () => {
    return (
        <PageLayout bgTitle="Publications">
            <Container>
                {allPublications.map((publication, index) => (
                    <Accordion
                        key={index}
                        year={publication.year}
                        publications={publication.publications}
                    />
                ))}
            </Container>
        </PageLayout>
    );
};

interface AccordionProps {
    year: number;
    publications: {
        title: string;
        authors: string[];
        journal: string;
        year?: string;
        volume?: string;
        issue?: string;
        doi: string;
        link: string;
    }[];
}

const Accordion = ({ year, publications }: AccordionProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="my-4">
            {/* Accordion Header */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex w-full items-center justify-between rounded-lg bg-white p-4 shadow-md transition-all"
            >
                <span className="text-lg font-semibold">{year}</span>
                <span
                    className={`transform text-sm transition-transform ${
                        isOpen ? "rotate-180" : ""
                    }`}
                >
                    {/* Chevron Icon */}▼
                </span>
            </button>

            {/* Accordion Content */}
            {isOpen && (
                <div className="mt-2 rounded-lg bg-white p-4 shadow-md">
                    {publications.map((publication, index) => (
                        <div key={index} className="mb-4">
                            <h2 className="text-xl font-semibold">
                                {publication.title}
                            </h2>
                            <p className="text-sm text-gray-700">
                                {publication.authors.join(", ")}
                            </p>
                            <p className="text-sm italic text-gray-600">
                                {publication.journal}
                            </p>
                            <p className="text-sm text-gray-600">
                                {publication.year}
                            </p>
                            {publication.volume && (
                                <p className="text-sm text-gray-600">
                                    Volume: {publication.volume}
                                </p>
                            )}
                            {publication.issue && (
                                <p className="text-sm text-gray-600">
                                    Issue: {publication.issue}
                                </p>
                            )}
                            {publication.doi && (
                                <p className="text-sm text-gray-600">
                                    DOI: {publication.doi}
                                </p>
                            )}
                            {publication.link && (
                                <a
                                    href={publication.link}
                                    className="text-sm text-blue-500 hover:underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Link
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Publications;
