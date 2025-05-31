import {type ClassValue, clsx} from "clsx"
import {twMerge} from "tailwind-merge"
import {client} from "@/lib/sanity/client";
import type {SanityDocument} from "next-sanity";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getProjects = async () => {
  const PROJECTS_QUERY = `*[
      _type == "project" && defined(slug.current)
    ]|order(publishedAt desc)[0...12]{
      _id,
      title,
      slug,
      description,
      images[]{_key, asset->{_id, url}},
      techStack,
      features,
      url,
      github,
      publishedAt
    }`;
  try{
    const options = {next: {revalidate: 30}};
    const response = await client.fetch<SanityDocument[]>(PROJECTS_QUERY, {}, options);
    if(response){
      return response;
    }
  }
  catch (error){
    console.error(error);
  }
}

export const getExperience = async () => {
  const query = `*[
      _type == "experience"
    ]|order(endDate desc)[0...12]{
      _id,
      position,
      company,
      companyLogo,
      startDate,
      endDate,
      description,
    }`;
  try{
    const options = {next: {revalidate: 30}};
    const response = await client.fetch<SanityDocument[]>(query, {}, options);
    if(response){
      return response;
    }
  }
  catch (error){
    console.error(error);
  }
}

export const fetchEducation = async () => {
  const query = `*[
      _type == "education"
    ]|order(startDate asc)[0...12]{
      _id,
      institution,
      degree,
      logo,
      grades,
      fieldsOfStudy,
      startDate,
      endDate,
      description,
    }`;
  try{
    const options = {next: {revalidate: 30}};
    const response = await client.fetch<SanityDocument[]>(query, {}, options);
    if(response){
      return response;
    }
  }
  catch (error){
    console.error(error);
  }
}

export const formatSanityDate = (inputDate: string) => {
  const date = new Date(inputDate);
  if (isNaN(date.getTime())) {
    throw new Error("Invalid date format. Expected format: YYYY-MM-DD");
  }
  const options: Intl.DateTimeFormatOptions = { month: 'short', year: 'numeric' };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}